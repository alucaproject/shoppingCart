//products list

products = new Array();

products.push( { id: 00, name: "Towels", price: 10.25, description: "This is demo description for towels", image: "images/towels" } );
products.push( { id: 01, name: "Beachball", price: 5.25, description: "This is demo description for beachball", image: "images/beachball" } );
products.push( { id: 02, name: "Surfboard", price: 150.25, description: "This is demo description for surfboard", image: "images/surfboard" } );
products.push( { id: 03, name: "Sunglasses", price: 16.55, description: "This is demo description for sunglasses ", image: "images/sunglasses" } );


function get_product( id ){
  for( var x = 0; x < products.length; x++ ){
    if( products[x].id == id ){
      return products[x];
    }
  }

  return null;
}
