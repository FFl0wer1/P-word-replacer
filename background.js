browser.runtime.onInstalled.addListener(() => {
    // Проверяем, было ли уже предоставлено разрешение
    browser.permissions.contains({ permissions: ['tabs'] }).then((result) => {
      if (!result) {
        // Запрашиваем разрешение
        browser.permissions.request({ permissions: ['tabs'] }).then((granted) => {
          if (granted) {
            // Разрешение предоставлено
            console.log('Разрешение на доступ к вкладкам предоставлено.');
          } else {
            // Пользователь отказал в предоставлении разрешения
            console.log('Пользователь отказал в предоставлении разрешения на доступ к вкладкам.');
          }
        });
      }
    });
  });
  