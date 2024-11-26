function getElementByIndices(config, subUrl) {
  subUrl = subUrl.replace(/^\/(.*)/, '$1');
  const subUrlArray = subUrl ? subUrl.split('/') : [];

  let current = {
    path: [config.label],
    menu: config.menu,
  };

  let breadcrumb = [
    {
      label: [config.label],
      path: '',
    }
  ];

  
  if (!subUrlArray.length) return {current, breadcrumb};
  
  current.menu = config.menu[subUrlArray[0]];
  current.path.push(current.menu.label);
  
  breadcrumb.push({
    label: current.menu.label,
    path: current.menu.url,
  });

  // const searchedId = 2;
  // const foundItem = current.menu.find(item => item.id === searchedId);

  // console.log(breadcrumb)

  
  for (let i = 1, len = subUrlArray.length; i < len; i++) {
    const index = subUrlArray[i];

  

    if (current.menu.submenu[index] === undefined) return [];

    current.menu = current.menu.submenu[index];
    current.path.push(current.menu.label);

    breadcrumb.push({
      label: current.menu.label,
      path: current.menu.url,
    });
  }

  return {current, breadcrumb};
}

export default getElementByIndices;