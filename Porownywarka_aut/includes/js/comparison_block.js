const { registerBlockType } = wp.blocks;

registerBlockType('car-comparison/comparison-block', {
    title: 'comparison custom block',
    icon: 'editor-table',
    category: 'widgets',
    attributes: {
        car1: { type: 'string'},
        car2: { type: 'string'}
    },
    edit: function(props){
        return React.createElement("div", {
            class: "search-bar"
          }, React.createElement("input", {
            class: "search-input",
            type: "text",
            placeholder: "Search..."
          }), React.createElement("img", {
            class: "search-icon",
            src: "search-icon.png",
            alt: "Search Icon"
          }));
    },
    save: function(props){
        return React.createElement("div", {
            class: "search-bar"
          }, React.createElement("input", {
            class: "search-input",
            type: "text",
            placeholder: "Search..."
          }), React.createElement("img", {
            class: "search-icon",
            src: PLUGIN_URL + "search-icon.png",
            alt: "Search Icon"
          }));
    }
});

//C:\xampp\htdocs\wordpress\wp-content\plugins\Porownywarka_aut\includes\js