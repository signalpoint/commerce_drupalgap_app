/**
 * Implements hook_menu()
 */
function example_menu() {
  var items = { };
  items['collection/%/%'] = {
    title: 'Collection',
    page_callback: 'example_collection_page'
  };
  return items;
}

/**
 * Collection page callback.
 */
function example_collection_page() {
  
  // Grab the collection and category from the path.
  var collection = arg(1);
  var collection_path = '';
  switch (collection) {
    case 'carry': collection_path = 'To carry'; break;
    case 'drink': collection_path = 'To drink with'; break;
    case 'geek': collection_path = 'To geek out'; break;
    case 'wear': collection_path = 'To wear'; break;
  }
  collection_path = encodeURIComponent(collection_path);
  var category = arg(2);
  var category_path = 'all';
  if (!category) { category = 'all'; }
  category_path = encodeURIComponent(category_path);
  
  var content = {};
  content.tops = {
    theme: 'view',
    format: 'ul',
    path: 'drupalgap/products/' + collection_path + '/' + category_path,
    row_callback: 'example_collection_page_row',
    items: [],
    attributes: { id: 'collections_list_' + collection + '_' + category },
  };
  return content;
}

/**
 * Collection row callback.
 */
function example_collection_page_row(view, row) {
  var html = l(
    theme('image', { path: row.image }) +
      '<h2>' + row.title + '</h2>' + 
      '<p class="ui-li-aside">' + row.price + '</p>',
    'node/' + row.nid
  );
  return html;
}

