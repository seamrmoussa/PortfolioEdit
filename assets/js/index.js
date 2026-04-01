// ^ Write your JavaScript code

// For active link
var allSection = document.querySelectorAll(".nav-links a");
var footerSection = document.getElementById("footer");
var footerSectionOffsetTop = document.getElementById("footer").offsetTop;
var sections = [];
var offsetAllSections = [];
var navBarHeight = 90;

// For to top page BTN
var scrollToTopBtn = document.getElementById("scroll-to-top");

// For toggle gear BTN
var settingsToggleBtn = document.getElementById("settings-toggle");
var closeSettingsSidebar = document.getElementById("close-settings");
var settingsSidebar = document.getElementById("settings-sidebar");

// For change default font
var fontChangeBtn = document.querySelectorAll(".font-option");

// For inject theme button
var themeColorsGrid = document.getElementById("theme-colors-grid");

// default setting btn
var resetSettings = document.getElementById("reset-settings");

// Theme toggle button
var themeToggleButton = document.getElementById("theme-toggle-button");

// For get portfolio button (Navs & Tabs)
var portfolioFilters = document.getElementById("portfolio-filters");
var portfolioFilterBtn = document.querySelectorAll(".portfolio-filter");
var portfolioItems = document.querySelectorAll(".portfolio-item");

// For Carousel
var testimonialsCarousel = document.getElementById("testimonials-carousel");
var nextTestimonial = document.getElementById("next-testimonial");
var prevTestimonial = document.getElementById("prev-testimonial");
var carouselIndicator = document.querySelectorAll(".carousel-indicator");

var allFontFamily = ["font-tajawal", "font-alexandria", "font-cairo"];

var activeClassesCarouse = [
  "active",
  "bg-linear-to-r",
  "from-primary",
  "to-secondary",
  "text-white",
  "hover:shadow-lg",
  "hover:shadow-primary/50",
];

var inactiveClassesCarouse = [
  "bg-white",
  "dark:bg-slate-800",
  "text-slate-600",
  "dark:text-slate-300",
  "hover:bg-slate-100",
  "dark:hover:bg-slate-700",
  "border",
  "border-slate-300",
  "dark:border-slate-700",
];

var activeClassesFontBtn = [
  "active",
  "border-primary",
  "bg-slate-50",
  "dark:bg-slate-800",
];

var activeClassesThemeBtn = [
  "ring-2",
  "ring-primary",
  "ring-offset-2",
  "ring-offset-white",
  "dark:ring-offset-slate-900",
];

var ClassesThemeBtn = [
  "w-12",
  "h-12",
  "rounded-full",
  "cursor-pointer",
  "transition-transform",
  "hover:scale-110",
  "border-2",
  "border-slate-200",
  "dark:border-slate-700",
  "hover:border-primary",
  "shadow-sm",
];

// For set default color
var defaultColor = {
  primary: "#6366f1",
  secondary: "#8b5cf6",
  accent: "#a855f7",
};

///////////////////////////////////////////////////
// *main theme color for
var colors = [
  {
    title: "Purple Blue",
    primary: "#6366f1",
    secondary: "#8b5cf6",
    gradient: "linear-gradient(135deg, rgb(99, 102, 241), rgb(139, 92, 246))",
  },
  {
    title: "Pink Orange",
    primary: "#ec4899",
    secondary: "#f97316",
    gradient: "linear-gradient(135deg, rgb(236, 72, 153), rgb(249, 115, 22))",
  },
  {
    title: "Green Emerald",
    primary: "#10b981",
    secondary: "#059669",
    gradient: "linear-gradient(135deg, rgb(16, 185, 129), rgb(5, 150, 105))",
  },
  {
    title: "Blue Cyan",
    primary: "#3b82f6",
    secondary: "#06b6d4",
    gradient: "linear-gradient(135deg, rgb(59, 130, 246), rgb(6, 182, 212))",
  },

  {
    title: "Red Rose",
    primary: "#ef4444",
    secondary: "#f43f5e",
    gradient: "linear-gradient(135deg, rgb(239, 68, 68), rgb(244, 63, 94))",
  },
  {
    title: "Amber Orange",
    primary: "#f59e0b",
    secondary: "#ea580c",
    gradient: "linear-gradient(135deg, rgb(245, 158, 11), rgb(234, 88, 12))",
  },
];

// ! active link logic
///////////////////////////////////////////////////
// *loop for create array of object to fetch section element, anchor element from navbar and
for (var i = 0; i < allSection.length; i++) {
  var section = allSection[i].getAttribute("href").substring(1);
  var secElement = document.getElementById(section);
  sections.push({
    sec: secElement,
    link: allSection[i],
  });
  offsetAllSections.push(secElement.offsetTop);
}

///////////////////////////////////////////////////
// *to check what is element active right now
updateActiveLink();
function updateActiveLink() {
  var currentScroll = window.scrollY + navBarHeight;
  for (var i = 0; i < sections.length; i++) {
    if (
      currentScroll >= offsetAllSections[i] &&
      (currentScroll < offsetAllSections[i + 1] ||
        window.scrollY < footerSectionOffsetTop)
    ) {
      activeLink(sections[i].link);
    }
  }
}

///////////////////////////////////////////////////
// *To clear active link from all links and but it to active link now
function activeLink(eleLink) {
  for (var i = 0; i < allSection.length; i++) {
    allSection[i].classList.remove("active");
  }
  eleLink.classList.add("active");
}

///////////////////////////////////////////////////
// *For make to top page btn hide or not
showAndHideToTopBtn();
function showAndHideToTopBtn() {
  if (window.scrollY >= navBarHeight * 4) {
    scrollToTopBtn.classList.remove("invisible", "opacity-0");
    scrollToTopBtn.classList.add("visible", "opacity-100");
  } else {
    scrollToTopBtn.classList.remove("visible", "opacity-100");
    scrollToTopBtn.classList.add("invisible", "opacity-0");
  }
}

///////////////////////////////////////////////////
// *To active tow function for active link and to top page BTN
var scrollTimeout;
window.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(function () {
    updateActiveLink();
    showAndHideToTopBtn();
  }, 300);
});

///////////////////////////////////////////////////
// *To top page BTN
scrollToTopBtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

///////////////////////////////////////////////////
// *For make gear btn hide or not
function hideAndShowSidebar(styleValue, transValue) {
  if (styleValue === "0rem") {
    settingsSidebar.classList.add(transValue);
  } else {
    settingsSidebar.classList.remove(transValue);
  }
  settingsToggleBtn.style.right = styleValue;
}

settingsToggleBtn.addEventListener("click", () => {
  hideAndShowSidebar("20rem", "translate-x-full");
});

closeSettingsSidebar.addEventListener("click", () => {
  hideAndShowSidebar("0rem", "translate-x-full");
});

document.addEventListener("click", (e) => {
  if (
    !settingsSidebar.contains(e.target) &&
    !settingsToggleBtn.contains(e.target)
  ) {
    hideAndShowSidebar("0rem", "translate-x-full");
  }
});

///////////////////////////////////////////////////
// *check and set Default Font
fontChangeBtnActive();
function fontChangeBtnActive() {
  var mainFontNow = localStorage.getItem("selectedFont");
  var newDefaultFont = mainFontNow ? mainFontNow : "font-tajawal";

  updateDefaultFontAndLocalStorage(newDefaultFont, allFontFamily);

  for (var i = 0; i < fontChangeBtn.length; i++) {
    fontChangeBtn[i].classList.remove("active");
    var btnFontName = `font-${fontChangeBtn[i].getAttribute("data-font")}`;
    if (btnFontName === newDefaultFont) {
      fontChangeBtn[i].classList.add(...activeClassesFontBtn);
    }
  }
}

///////////////////////////////////////////////////
for (var i = 0; i < fontChangeBtn.length; i++) {
  fontChangeBtn[i].addEventListener("click", function () {
    for (var j = 0; j < fontChangeBtn.length; j++) {
      fontChangeBtn[j].classList.remove(...activeClassesFontBtn);
    }
    var getFontName = `font-${this.getAttribute("data-font")}`;

    updateDefaultFontAndLocalStorage(getFontName, allFontFamily);
    this.classList.add(...activeClassesFontBtn);
  });
}

function updateDefaultFontAndLocalStorage(mainFont, classes) {
  document.body.classList.remove(...classes);
  document.body.classList.add(mainFont);
  localStorage.setItem("selectedFont", mainFont);
}

///////////////////////////////////////////////////
// *Create and inject Element For Color button
var fragment = document.createDocumentFragment();
for (var i = 0; i < colors.length; i++) {
  var colorButtonElement = document.createElement("button");
  colorButtonElement.classList.add(...ClassesThemeBtn);
  colorButtonElement.setAttribute("title", colors[i].title);
  colorButtonElement.setAttribute("data-primary", colors[i].primary);
  colorButtonElement.setAttribute("data-secondary", colors[i].secondary);
  colorButtonElement.style.background = `${colors[i].gradient}`;
  fragment.append(colorButtonElement);
}

themeColorsGrid.append(fragment);
var themeColorsGridAll = document.querySelectorAll("#theme-colors-grid button");

///////////////////////////////////////////////////
// *Remove Theme Btn Active Classes
function removeActiveClassesThemeBtn() {
  for (var i = 0; i < themeColorsGridAll.length; i++) {
    themeColorsGridAll[i].classList.remove(...activeClassesThemeBtn);
  }
}

///////////////////////////////////////////////////
// *change theme color on click button
themeColorsGrid.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    removeActiveClassesThemeBtn();

    var primaryColor = e.target.getAttribute("data-primary");
    var secondaryColor = e.target.getAttribute("data-secondary");
    e.target.classList.add(...activeClassesThemeBtn);
    document.documentElement.style.setProperty("--color-primary", primaryColor);
    document.documentElement.style.setProperty(
      "--color-secondary",
      secondaryColor,
    );

    var defaultColorNow = {
      primary: primaryColor,
      secondary: secondaryColor,
      accent: "#a855f7",
    };

    localStorage.setItem("selectedTheme", JSON.stringify(defaultColorNow));
  }
});

///////////////////////////////////////////////////
// *to set default theme color (self invoke function)
colorChangeBtnActive();
function colorChangeBtnActive() {
  var mainColorNow = JSON.parse(localStorage.getItem("selectedTheme"));
  var newDefaultColor = mainColorNow ? mainColorNow : defaultColor;

  document.documentElement.style.setProperty(
    "--color-primary",
    newDefaultColor.primary,
  );
  document.documentElement.style.setProperty(
    "--color-secondary",
    newDefaultColor.secondary,
  );
  for (var i = 0; i < themeColorsGridAll.length; i++) {
    if (
      themeColorsGridAll[i].getAttribute("data-primary") ===
      newDefaultColor.primary
    ) {
      themeColorsGridAll[i].classList.add(...activeClassesThemeBtn);
      break;
    }
  }
}

///////////////////////////////////////////////////
// *For set default setting
resetSettings.addEventListener("click", () => {
  localStorage.setItem("selectedFont", "font-tajawal");
  localStorage.setItem("selectedTheme", JSON.stringify(defaultColor));

  fontChangeBtnActive();
  removeActiveClassesThemeBtn();
  colorChangeBtnActive();
});

///////////////////////////////////////////////////
// *For change dark theme
themeToggleButton.addEventListener("click", themeToggle);
function themeToggle() {
  var isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

///////////////////////////////////////////////////
// *For get default theme
(function checkTheme() {
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

///////////////////////////////////////////////////
// *For Navs & Tabs
portfolioFilters.addEventListener("click", (e) => {
  var sectionName = "";
  if (e.target.tagName === "BUTTON") {
    sectionName = e.target.dataset.filter;
    for (var i = 0; i < portfolioFilterBtn.length; i++) {
      portfolioFilterBtn[i].classList.remove(...activeClassesCarouse);
      portfolioFilterBtn[i].classList.add(...inactiveClassesCarouse);
    }
    e.target.classList.add(...inactiveClassesCarouse);
    e.target.classList.add(...activeClassesCarouse);

    for (var i = 0; i < portfolioItems.length; i++) {
      var categoryName = portfolioItems[i].dataset.category;
      var sectionHide = categoryName != sectionName && sectionName != "all";
      portfolioItems[i].style.display = sectionHide ? "none" : "block";
    }
  }
});

///////////////////////////////////////////////////
// *For Carousel
var currentIndex = 0;
var totalItems = carouselIndicator.length;

function updateCarousel() {
  valueNow = currentIndex * 33.3333;
  testimonialsCarousel.style.transform = `translateX(${valueNow}%)`;

  for (var i = 0; i < carouselIndicator.length; i++) {
    carouselIndicator[i].classList.remove("active", "bg-accent", "scale-125");
    carouselIndicator[i].classList.add("bg-slate-400", "dark:bg-slate-600");
  }

  carouselIndicator[currentIndex].classList.remove(
    "bg-slate-400",
    "dark:bg-slate-600",
  );
  carouselIndicator[currentIndex].classList.add(
    "active",
    "bg-accent",
    "scale-125",
  );
}

nextTestimonial.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }
  updateCarousel();
});

prevTestimonial.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  }
  updateCarousel();
});

for (var i = 0; i < carouselIndicator.length; i++) {
  carouselIndicator[i].addEventListener("click", function () {
    currentIndex = this.getAttribute("data-index");
    updateCarousel();
  });
}
updateCarousel();
