var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//DOM Manipulation
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 768) {
    updatePortrait();
  }
});

function updatePortrait() {
  var header = document.getElementById("js-header");
  var portrait = document.getElementById("js-portrait");

  header.addEventListener("click", function (event) {
    var NEW_SRC_ATTRIBUTE = "data-img";

    var dataImgAttr = [].concat(_toConsumableArray(event.target.attributes)).find(function (attribute) {
      return attribute.name === NEW_SRC_ATTRIBUTE;
    }); //undefined if no data-img attribute present
    var imgNumber = dataImgAttr && dataImgAttr.value || '';

    if (imgNumber) {
      var newSrc = "build/images/b_image" + imgNumber + ".png";
      portrait.setAttribute("src", newSrc);
    }
  });
}

//React Injection
{
  var ProjectCard = function ProjectCard(props) {
    var project = props.value;

    return React.createElement(
      "a",
      { href: project.url, target: "_blank", className: "card container--flex container--relative content--centered", style: { "backgroundImage": "url(" + project.imageUrl + ")" } },
      React.createElement(
        "h3",
        { className: "project__title" },
        project.title
      ),
      React.createElement(
        "p",
        { className: "project__description" },
        project.description ? project.description : ""
      ),
      React.createElement("div", { className: "deco" })
    );
  };

  var TagList = function TagList(props) {
    var activeTags = props.activeTags,
        allTags = props.allTags,
        handleClick = props.handleClick;

    var uniqueTags = Array.from(new Set(allTags));
    var tags = uniqueTags.map(function (tag) {
      return React.createElement(
        "li",
        { key: createKey(tag) },
        React.createElement(
          "button",
          { className: activeTags.has(tag) ? "active" : "passive", onClick: handleClick },
          activeTags.has(tag) ? createSRonlyText(HIDE) : createSRonlyText(SHOW),
          tag
        )
      );
    });

    return React.createElement(
      "div",
      { className: "container--relative container--tags" },
      React.createElement(
        "ul",
        { className: "container--flex content--wrapped tags" },
        tags
      ),
      React.createElement(
        "button",
        { className: "btn--control clear", onClick: handleClick, hidden: !props.showClear },
        "Clear all ",
        createSRonlyText("tags")
      ),
      React.createElement(
        "button",
        { className: "btn--control choose", onClick: handleClick, hidden: !props.showChoose },
        "Choose all ",
        createSRonlyText("tags")
      )
    );
  };

  // Rendering


  // Helper functions
  var createKey = function createKey(seed) {
    var key = seed && removeWhitespace(seed).toLowerCase();
    return key || Date.now().toString();
  };

  var createSRonlyText = function createSRonlyText(str) {
    return React.createElement(
      "span",
      { className: "sr-only" },
      str
    );
  };

  var hasClass = function hasClass(element, className) {
    var classArray = Array.from(element.classList);
    return classArray.includes(className);
  };

  var removeWhitespace = function removeWhitespace(str) {
    var result = str && str.toString() //typechecking
    .split(' ') //'word1 word2' => ["word1", "word2"]
    .join(''); //["word1", "word2"] => 'word1word2'
    return result;
  };

  var toggleValueInSet = function toggleValueInSet(aSet, aValue) {
    var copySet = new Set(aSet);
    copySet.has(aValue) ? copySet.delete(aValue) : copySet.add(aValue);
    return copySet;
  };

  // Script-wide constants
  var PLACEHOLDER = "No projects are chosen. Click on tags above to choose some projects.";
  var PROJECTS = " projects with the following tag: ";
  var HIDE = "Hide " + PROJECTS;
  var SHOW = "Show " + PROJECTS;

  var projects = [{
    id: "100",
    title: "Kurt Cobain's Tribute Page",
    url: "https://codepen.io/collection/XPjeBj/",
    imageUrl: "build/images/screenshot.png",
    imageAlt: "Screenshot of my freeCodeCamp project focused on Responsive Web Design",
    tags: ["RWD", "Variable Fonts", "CSS Grid"],
    description: "A pure CSS experiment on CSS Grid and variable fonts. Submitted for freeCodeCamp certifications with focus on Responsive Web Design."
  }, {
    id: "101",
    title: "Sparinspiration",
    url: "https://sparinspiration.godskesen.consulting",
    imageUrl: "build/images/screenshot2.png",
    imageAlt: "Screenshot of sparinspiration.godskesen.consulting",
    tags: ["Bootstrap 4", "Flexbox", "CSS Grid"],
    description: "A Swedish website with 5 daily money-saving tips."
  }];

  // Components

  var ProjectSection = function (_React$Component) {
    _inherits(ProjectSection, _React$Component);

    function ProjectSection(props) {
      _classCallCheck(this, ProjectSection);

      var _this = _possibleConstructorReturn(this, (ProjectSection.__proto__ || Object.getPrototypeOf(ProjectSection)).call(this, props));

      _this.defaultState = {
        activeTags: new Set(props.projects.flatMap(function (project) {
          return project.tags;
        })),
        showClear: true, //flag for "Clear All"-button
        showChoose: false, //flag for "Choose All"-button
        firstClick: true //all tags are shown from the beggining, so on first click non-chosen tags should become passive
      };

      _this.state = _this.defaultState;
      _this.handleClick = _this.handleClick.bind(_this);
      return _this;
    }

    _createClass(ProjectSection, [{
      key: "handleClick",
      value: function handleClick(e) {
        e.preventDefault();

        if (hasClass(e.target, 'clear')) {
          this.setState({ activeTags: new Set(), showClear: false, showChoose: true });
          return;
        }

        if (hasClass(e.target, 'choose')) {
          this.setState(this.defaultState);
          return;
        }

        var clickedTag = e.target.lastChild.nodeValue; //every tag consists of a sr-only span and a text node   
        var _state = this.state,
            activeTags = _state.activeTags,
            firstClick = _state.firstClick;


        var updatedTags = firstClick ? new Set([clickedTag]) : toggleValueInSet(activeTags, clickedTag);
        var updatedShowChoose = this.defaultState.activeTags.size !== updatedTags.size;
        var updatedShowClear = updatedTags.size > 0;
        this.setState({ activeTags: updatedTags, firstClick: false, showClear: updatedShowClear, showChoose: updatedShowChoose });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var projects = this.props.projects;


        var projectsList = projects.filter(function (project) {
          return project.tags.some(function (tag) {
            return _this2.state.activeTags.has(tag);
          });
        }).map(function (project) {
          return React.createElement(ProjectCard, { key: project.id, value: project });
        });

        var tagList = projects.flatMap(function (project) {
          return project.tags;
        }); //only unique tags

        return React.createElement(
          "section",
          { id: "projects", className: "container--flex container--flex--vertical" },
          React.createElement(
            "h2",
            { className: "section__title" },
            "My projects and collaborations"
          ),
          React.createElement(TagList, { allTags: tagList, activeTags: this.state.activeTags, handleClick: this.handleClick, showClear: this.state.showClear, showChoose: this.state.showChoose }),
          projectsList.length ? projectsList : PLACEHOLDER
        );
      }
    }]);

    return ProjectSection;
  }(React.Component);

  var projectSectionContainer = document.querySelector("#js-container-projects");
  ReactDOM.render(React.createElement(ProjectSection, { projects: projects }), projectSectionContainer);
}