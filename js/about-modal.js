(function(){
  function openModal(){
    var m = document.getElementById(''about-modal'');
    if (m) m.setAttribute(''aria-hidden'',''false'');
  }
  function closeModal(){
    var m = document.getElementById(''about-modal'');
    if (m) m.setAttribute(''aria-hidden'',''true'');
  }
  document.addEventListener(''click'', function(e){
    var t = e.target;
    if (t && (t.id === 'about-link' || t.getAttribute('data-open') === 'about')){
      e.preventDefault();
      openModal();
    }
    if (t && (t.getAttribute(''data-close'') === ''about'')){
      closeModal();
    }
  });
  document.addEventListener(''keydown'', function(e){
    if (e.key === ''Escape'') closeModal();
  });
})();

