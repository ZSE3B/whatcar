const { registerBlockType } = wp.blocks;

registerBlockType('car-comparison/add-comparison-block', {
    title: 'add comparison block',
    icon: 'welcome-add-page',
    category: 'widgets',
    attributes: {
        clicked: { type: 'string'}
    },
    edit: function(props){
        return 
    },
    save: function(props){
        return null;
    }
});