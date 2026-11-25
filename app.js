// ============================================================
// app.js — what your site DOES.
// Plain JavaScript, no libraries, no installs.
// It uses STARTUP and LISTINGS from data.js (loaded first).
// ============================================================

(function () {
  "use strict";

  // ----------------------------------------------------------
  // 1. Saving things in the browser (localStorage).
  //    This only remembers things on THIS browser on THIS device.
  //    Your teammates and your customers will NOT see it.
  //    A real product would need a server and a database for that.
  // ----------------------------------------------------------
  const storage = {
    get: function (key, fallback) {
      try {
        const saved = localStorage.getItem(key);
        return saved === null ? fallback : JSON.parse(saved);
      } catch (error) {
        return fallback; // storage blocked or broken: just carry on
      }
    },
    set: function (key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        // storage blocked (e.g. private window): ignore
      }
    }
  };

  let savedIds = storage.get("savedIds", []);
  let purchaseRequests = storage.get("purchaseRequests", []);
  const firstThreeRequestResetKey = "firstThreePurchaseRequestsReset";
  if (!storage.get(firstThreeRequestResetKey, false)) {
    purchaseRequests = purchaseRequests.filter(function (id) {
      return id !== 1 && id !== 2 && id !== 3;
    });
    storage.set("purchaseRequests", purchaseRequests);
    storage.set(firstThreeRequestResetKey, true);
  }
  let sellerListings = storage.get("sellerListings", []);
  let accountProfile = storage.get("accountProfile", null);
  let pendingAccountAction = null;

  // ----------------------------------------------------------
  // 2. Put the startup's name and pitch on the page.
  // ----------------------------------------------------------
  document.title = STARTUP.name;
  document.getElementById("brand-name").textContent = STARTUP.name;
  document.getElementById("tagline").textContent = STARTUP.tagline;
  document.getElementById("pitch").textContent = STARTUP.pitch;

  const accountGateMessage = document.getElementById("account-gate-message");

  function requireAccount(action) {
    if (accountProfile) {
      return true;
    }

    pendingAccountAction = action;
    accountGateMessage.textContent = action.type === "seller"
      ? "Create a SlopeSwap account before submitting a listing. After sign-up, we'll return you to your listing so you can finish."
      : "Create a SlopeSwap account before requesting to buy. After sign-up, your purchase request will be sent.";
    accountGateMessage.hidden = false;
    window.location.hash = "#account";
    return false;
  }

  // ----------------------------------------------------------
  // 3. Views: show one section at a time, based on the #link in the address bar.
  // ----------------------------------------------------------
  function showView() {
    const requested = (window.location.hash || "#home").slice(1);
    const views = document.querySelectorAll("[data-view]");
    const exists = Array.prototype.some.call(views, function (view) {
      return view.id === requested;
    });
    const current = exists ? requested : "home";

    views.forEach(function (view) {
      view.hidden = view.id !== current;
    });

    document.querySelectorAll("nav a").forEach(function (link) {
      if (link.getAttribute("href") === "#" + current) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", showView);

  // ----------------------------------------------------------
  // 4. Explore page: build one card per listing.
  //    We use textContent (not innerHTML) so text is always shown
  //    as text — a basic security habit.
  // ----------------------------------------------------------
  const grid = document.getElementById("listing-grid");
  const searchBox = document.getElementById("search-box");
  const emptyMessage = document.getElementById("empty-message");
  const savedCount = document.getElementById("saved-count");
  const savedGrid = document.getElementById("saved-listing-grid");
  const savedSectionCount = document.getElementById("saved-section-count");
  const savedEmpty = document.getElementById("saved-empty");
  const clearSaved = document.getElementById("clear-saved");
  const categoryFilter = document.getElementById("category-filter");
  const audienceFilter = document.getElementById("audience-filter");
  const sortListings = document.getElementById("sort-listings");

  function makeCard(item) {
    const card = document.createElement("article");
    card.className = "card";

    if (item.isNew) {
      const badge = document.createElement("span");
      badge.className = "new-badge";
      badge.textContent = "New";
      card.append(badge);
    }

    if (item.image) {
      const image = document.createElement("img");
      image.className = "listing-photo";
      image.src = item.image;
      image.alt = item.photos && item.photos.length > 0
        ? "Seller photo of " + item.name
        : "Illustration for " + item.name;
      card.append(image);
    }

    if (item.photos && item.photos.length > 1) {
      const photoStrip = document.createElement("div");
      photoStrip.className = "shop-photo-thumbnails";
      item.photos.slice(1).forEach(function (photo, index) {
        const thumbnail = document.createElement("img");
        thumbnail.className = "shop-photo-thumbnail";
        thumbnail.src = photo.dataUrl;
        thumbnail.alt = "Additional seller photo " + (index + 2) + " of " + item.name;
        photoStrip.append(thumbnail);
      });
      card.append(photoStrip);
    }

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = item.category;

    const title = document.createElement("h2");
    title.textContent = item.name;

    const text = document.createElement("p");
    text.textContent = item.description;

    if (typeof item.price === "number") {
      const price = document.createElement("p");
      price.textContent = "$" + item.price + " · " + (item.condition || "Condition assessed");
      card.append(tag, title, price, text);
    } else {
      card.append(tag, title, text);
    }

    const isSaved = savedIds.indexOf(item.id) !== -1;
    if (typeof item.price === "number") {
      const actions = document.createElement("div");
      const saveButton = document.createElement("button");
      saveButton.type = "button";
      saveButton.className = "button secondary";
      saveButton.textContent = isSaved ? "Saved ✓" : "Save";
      saveButton.setAttribute("aria-pressed", isSaved ? "true" : "false");
      saveButton.addEventListener("click", function () {
        toggleSaved(item.id);
      });

      const isRequested = purchaseRequests.indexOf(item.id) !== -1;
      const requestButton = document.createElement("button");
      requestButton.type = "button";
      requestButton.className = "button";
      requestButton.textContent = isRequested
        ? "Request sent ✓"
        : accountProfile ? "Request to buy" : "Create account to request";
      requestButton.disabled = isRequested;
      requestButton.addEventListener("click", function () {
        requestPurchase(item.id);
      });

      actions.append(saveButton, document.createTextNode(" "), requestButton);
      card.append(actions);
    }
    return card;
  }

  function getBrowseListings() {
    const submittedSellerListings = sellerListings
      .filter(function (item) {
        return item.status !== "Sold";
      })
      .map(function (item) {
        return Object.assign({}, item, {
          image: item.photos && item.photos.length > 0
            ? item.photos[0].dataUrl
            : "",
          isNew: item.isNew !== false
        });
      });
    return LISTINGS.concat(submittedSellerListings);
  }

  function renderShopStats() {
    const activeSellerCount = MARKET_STATS.activeSellers
      + sellerListings.filter(function (item) {
        return item.status !== "Sold";
      }).length;
    document.getElementById("active-sellers").textContent =
      activeSellerCount.toLocaleString();
    document.getElementById("active-buyers").textContent =
      MARKET_STATS.activeBuyers.toLocaleString();
    document.getElementById("active-listings").textContent =
      getBrowseListings().length.toLocaleString();
  }

  function toggleSaved(id) {
    if (savedIds.indexOf(id) === -1) {
      savedIds.push(id);
    } else {
      savedIds = savedIds.filter(function (savedId) { return savedId !== id; });
    }
    storage.set("savedIds", savedIds);
    renderListings();
    renderSavedListings();
  }

  function renderListings() {
    renderShopStats();
    const query = searchBox.value.trim().toLowerCase();
    const category = categoryFilter.value;
    const audience = audienceFilter.value;
    let matches = getBrowseListings().filter(function (item) {
      const text = (item.name + " " + item.category + " " + item.audience + " " + item.description).toLowerCase();
      const matchesSearch = text.indexOf(query) !== -1;
      const matchesCategory = category === "" || item.category === category;
      const matchesAudience = audience === ""
        || item.audience === audience
        || item.audience === "Unisex";
      return matchesSearch && matchesCategory && matchesAudience;
    });

    if (sortListings.value === "price-low") {
      matches.sort(function (a, b) { return a.price - b.price; });
    } else if (sortListings.value === "price-high") {
      matches.sort(function (a, b) { return b.price - a.price; });
    } else if (sortListings.value === "name") {
      matches.sort(function (a, b) { return a.name.localeCompare(b.name); });
    }

    grid.replaceChildren.apply(grid, matches.map(makeCard));
    emptyMessage.hidden = matches.length > 0;
    const savedText = savedIds.length === 0
      ? "No saved items"
      : "You've saved " + savedIds.length + " item(s)";
    const requestText = purchaseRequests.length === 0
      ? ""
      : " · " + purchaseRequests.length + " purchase request(s)";
    savedCount.textContent = savedText + requestText;
  }

  searchBox.addEventListener("input", renderListings);
  categoryFilter.addEventListener("change", renderListings);
  audienceFilter.addEventListener("change", renderListings);
  sortListings.addEventListener("change", renderListings);

  function renderSavedListings() {
    const savedItems = getBrowseListings().filter(function (item) {
      return savedIds.indexOf(item.id) !== -1;
    });

    savedSectionCount.textContent = savedItems.length === 0
      ? "No saved items"
      : "You've saved " + savedItems.length + " item(s)";
    savedGrid.replaceChildren.apply(savedGrid, savedItems.map(makeCard));
    savedEmpty.hidden = savedItems.length > 0;
    clearSaved.hidden = savedItems.length === 0;
  }

  clearSaved.addEventListener("click", function () {
    savedIds = [];
    storage.set("savedIds", savedIds);
    renderListings();
    renderSavedListings();
  });

  function requestPurchase(id) {
    if (!requireAccount({
      type: "purchase",
      id: id,
      returnView: window.location.hash === "#saved" ? "saved" : "explore"
    })) {
      return;
    }

    if (purchaseRequests.indexOf(id) === -1) {
      purchaseRequests.push(id);
      storage.set("purchaseRequests", purchaseRequests);
      renderListings();
    }
  }

  // ----------------------------------------------------------
  // 6. Seller flow: store demo submissions and show their status.
  // ----------------------------------------------------------
  const sellerForm = document.getElementById("seller-form");
  const sellerListingsGrid = document.getElementById("seller-listings");
  const sellerEmpty = document.getElementById("seller-empty");
  const sellerPhotos = document.getElementById("seller-photos");
  const photoPreview = document.getElementById("photo-preview");
  const photoScanResult = document.getElementById("photo-scan-result");
  const photoScore = document.getElementById("photo-score");
  const conditionSelect = sellerForm.querySelector('[name="condition"]');
  let selectedPhotos = [];

  function calculatePhotoGearScore(condition, photos) {
    const conditionScores = { Excellent: 88, Good: 74, Fair: 58 };
    let score = conditionScores[condition] || 65;

    score += Math.min(photos.length * 2, 10);

    const sharpPhotos = photos.filter(function (photo) {
      return photo.width >= 800 && photo.height >= 600;
    }).length;
    score += Math.min(sharpPhotos * 2, 8);

    return Math.max(0, Math.min(100, score));
  }

  function scoreLabel(score) {
    if (score >= 88) return "Excellent";
    if (score >= 72) return "Good";
    if (score >= 55) return "Fair";
    return "Needs review";
  }

  function updatePhotoScan() {
    if (selectedPhotos.length === 0) {
      photoScanResult.hidden = true;
      return;
    }

    const score = calculatePhotoGearScore(conditionSelect.value, selectedPhotos);
    photoScanResult.hidden = false;
    photoScore.textContent = score + "/100 — " + scoreLabel(score);
  }

  sellerPhotos.addEventListener("change", function () {
    selectedPhotos = [];
    photoPreview.replaceChildren();
    const files = Array.from(sellerPhotos.files).slice(0, 5);

    files.forEach(function (file) {
      if (!file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) {
        return;
      }

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        const image = new Image();
        image.addEventListener("load", function () {
          const photo = {
            name: file.name,
            dataUrl: reader.result,
            width: image.naturalWidth,
            height: image.naturalHeight
          };
          selectedPhotos.push(photo);

          const preview = document.createElement("img");
          preview.src = photo.dataUrl;
          preview.alt = "Preview of " + photo.name;
          photoPreview.append(preview);
          updatePhotoScan();
        });
        image.src = reader.result;
      });
      reader.readAsDataURL(file);
    });
  });

  conditionSelect.addEventListener("change", updatePhotoScan);

  function renderSellerListings() {
    const dashboard = document.getElementById("listing-dashboard");
    const listingTotal = document.getElementById("listing-total");
    const listingActive = document.getElementById("listing-active");
    const listingPending = document.getElementById("listing-pending");
    const activeCount = sellerListings.filter(function (item) {
      return item.status === "Active";
    }).length;
    const pendingCount = sellerListings.filter(function (item) {
      return item.status !== "Active" && item.status !== "Sold";
    }).length;

    sellerEmpty.hidden = sellerListings.length > 0;
    dashboard.hidden = sellerListings.length === 0;
    listingTotal.textContent = sellerListings.length;
    listingActive.textContent = activeCount;
    listingPending.textContent = pendingCount;

    sellerListingsGrid.replaceChildren.apply(
      sellerListingsGrid,
      sellerListings.map(function (item) {
        const card = document.createElement("article");
        card.className = "card";

        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = item.category;

        const title = document.createElement("h2");
        title.textContent = item.name;

        const price = document.createElement("p");
        price.textContent = "$" + item.price + " · " + item.condition;

        const description = document.createElement("p");
        description.textContent = item.description;

        const status = document.createElement("p");
        status.textContent = "Status: " + item.status;

        if (typeof item.photoScore === "number") {
          const scanScore = document.createElement("p");
          scanScore.className = "gear-score";
          scanScore.textContent = "Demo photo scan: " + item.photoScore + "/100 · " + item.scoreLabel;
          card.append(scanScore);
        }

        if (item.photos && item.photos.length > 0) {
          const photoGrid = document.createElement("div");
          photoGrid.className = "listing-photo-grid";
          item.photos.forEach(function (photo) {
            const image = document.createElement("img");
            image.className = "listing-photo";
            image.src = photo.dataUrl;
            image.alt = photo.name;
            photoGrid.append(image);
          });
          card.append(photoGrid);
        }

        const statusLabel = document.createElement("label");
        statusLabel.className = "listing-status-control";
        const statusText = document.createElement("span");
        statusText.textContent = "Listing status";
        const statusSelect = document.createElement("select");
        ["Photo scanned; awaiting gear assessment", "Active", "Sold", "Paused"].forEach(function (value) {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          option.selected = item.status === value;
          statusSelect.append(option);
        });
        statusSelect.addEventListener("change", function () {
          item.status = statusSelect.value;
          storage.set("sellerListings", sellerListings);
          renderSellerListings();
          renderListings();
          renderSavedListings();
        });
        statusLabel.append(statusText, statusSelect);

        const actions = document.createElement("div");
        actions.className = "listing-actions";
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "button secondary";
        removeButton.textContent = "Remove listing";
        removeButton.addEventListener("click", function () {
          sellerListings = sellerListings.filter(function (listing) {
            return listing.id !== item.id;
          });
          storage.set("sellerListings", sellerListings);
          renderSellerListings();
          renderListings();
          renderSavedListings();
        });
        actions.append(removeButton);

        card.append(tag, title, price, description, status, statusLabel, actions);
        return card;
      })
    );
  }

  sellerForm.querySelector('button[type="submit"]').addEventListener("click", function (event) {
    if (!accountProfile) {
      event.preventDefault();
      requireAccount({ type: "seller", returnView: "sell" });
    }
  });

  sellerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!requireAccount({ type: "seller", returnView: "sell" })) {
      return;
    }

    if (sellerPhotos.files.length > 0 && selectedPhotos.length === 0) {
      return;
    }
    const formData = new FormData(sellerForm);
    const photoScoreValue = calculatePhotoGearScore(
      formData.get("condition"),
      selectedPhotos
    );
    const item = {
      id: "seller-" + Date.now(),
      name: formData.get("name").trim(),
      category: formData.get("category"),
      condition: formData.get("condition"),
      price: Number(formData.get("price")),
      description: formData.get("description").trim(),
      audience: formData.get("audience"),
      photos: selectedPhotos,
      photoScore: photoScoreValue,
      scoreLabel: scoreLabel(photoScoreValue),
      status: "Photo scanned; awaiting gear assessment",
      isNew: true,
      submittedAt: Date.now()
    };

    sellerListings.push(item);
    storage.set("sellerListings", sellerListings);
    sellerForm.reset();
    selectedPhotos = [];
    photoPreview.replaceChildren();
    photoScanResult.hidden = true;
    renderSellerListings();
    renderListings();
    renderSavedListings();
  });

  // ----------------------------------------------------------
  // 7. Demo account: store a local profile, never passwords.
  // ----------------------------------------------------------
  const accountForm = document.getElementById("account-form");
  const accountProfileCard = document.getElementById("account-profile");
  const profileName = document.getElementById("profile-name");
  const profileEmail = document.getElementById("profile-email");
  const profileMembership = document.getElementById("profile-membership");
  const accountLink = document.getElementById("account-link");
  const signOut = document.getElementById("sign-out");

  function renderAccount() {
    if (accountProfile) {
      accountForm.hidden = true;
      accountProfileCard.hidden = false;
      profileName.textContent = "Welcome, " + accountProfile.name;
      profileEmail.textContent = accountProfile.email;
      profileMembership.textContent = "Membership: " + accountProfile.membership;
      accountLink.textContent = accountProfile.name;
    } else {
      accountForm.hidden = false;
      accountProfileCard.hidden = true;
      accountLink.textContent = "Create account";
    }
  }

  accountForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(accountForm);

    accountProfile = {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      membership: formData.get("membership")
    };
    storage.set("accountProfile", accountProfile);
    renderAccount();
    renderListings();
    renderSavedListings();
    const action = pendingAccountAction;
    pendingAccountAction = null;
    if (action) {
      accountGateMessage.hidden = true;
      if (action.type === "seller") {
        sellerForm.requestSubmit();
      } else {
        requestPurchase(action.id);
      }
      window.location.hash = "#" + action.returnView;
    }
  });

  signOut.addEventListener("click", function () {
    accountProfile = null;
    storage.set("accountProfile", null);
    accountForm.reset();
    renderAccount();
    renderListings();
    renderSavedListings();
  });

  // ----------------------------------------------------------
  // 5. Start up.
  // ----------------------------------------------------------
  renderListings();
  renderSavedListings();
  renderSellerListings();
  renderAccount();
  showView();
})();
