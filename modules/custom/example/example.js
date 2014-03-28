/**
 * Implements hook_menu()
 */
function example_menu() {
  var items = {
    'tops':{
      'title':'Tops',
      'page_callback':'example_tops_page',
      'pageshow':'example_tops_pageshow'
    }
  };
  return items;
}

/**
 * Tops page callback.
 */
function example_tops_page() {
  var content = {};
  content.tops = {
    theme: 'view',
    format: 'ul',
    path: 'tops.json',
    row_callback: 'example_tops_page_row',
    items: [],
    attributes: { id: 'tops_list' },
  };
  return content;
}

/**
 * Tops row callback.
 */
function example_tops_page_row(view, row) {
  var html = l(
    theme('image', { path: row.image }) +
      '<h2>' + row.title + '</h2>' + 
      '<p class="ui-li-aside">' + row.price + '</p>',
    'node/' + row.nid
  );
  return html;
}

