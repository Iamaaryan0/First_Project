function showItem(itemId) {
    console.log("Show : ", itemId);
    const allItems = ["chole", "biryani", "noodles", "tikka"];
    allItems.map((item) => {
      var element = document.getElementById(item);
      if (item != itemId) {
        element.style.display = "none";
      } else {
        if (element.style.display === "none") {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      }
    });
  }