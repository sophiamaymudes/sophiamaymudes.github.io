function changeButton(){
    if (document.getElementById('toChange').innerHTML == 'It Changed!') {
      document.getElementById('toChange').innerHTML = 'Will It Change?';
    } else {
      document.getElementById('toChange').innerHTML = 'It Changed!';
    }
}
