
function load_purchased() {

  var cookie_string = document.cookie;
  var cookies = cookie_string.split("; ");
  for( var x = 0 ; x < cookies.length ; x++ ) {
    var parts = cookies[x].split("=");
    if( parts[0] == "purchased" ) {
      if( parts[1] == "" ) {
        return [];
      } else {
        return parts[1].split(",");
      }
    }
  }

  return [];

}// end load_purchases()

function save_purchased( purchased_array ){

  var cookie_string = purchased_array.join(",");
  document.cookie = "purchased=" + cookie_string;

}//end save_purchased()

Array.prototype.delete = function( index ) {
  return this.splice(index,1);
}
