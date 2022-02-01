function tabsHandler(index) {
  return function tabClickEvent(evt) {
    // Do stuff with tab.
    // The index variable can be accessed from within here.
  };
}

var tabs = document.querySelectorAll('.tab'),
  i;

for (i = 0; i < tabs.length; i += 1) {
  tabs[i].onclick = tabsHandler(i);
}