function generatePost() {
  //вытягиваем введенные данные
  const topicInput = document.getElementById("selectObject");
  const topicIdInput = document.getElementById("topicId");
  // дополнительно. для более легкого кода "очистить"
  const topic = topicInput.value;
  const topicId = topicIdInput.value;
  // сцепляем ссылку
  const url = `https://swapi.py4e.com/api/${topic}/${topicId}/`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // выводим ответ.Если выбраны фильмы, то поле тайтл, иначе(тб планеты и люди) - поле нейм
      const post = document.createElement("div");
      post.textContent = topic === "films" ? data.title : data.name;
      // присваиваем класс, чтобы навесить стили
      post.className = "topic";
      // очищаем
      const topicDiv = document.getElementsByClassName("topic")[0];
      if (topicDiv) {
        topicDiv.remove();
      }
      container.appendChild(post);
    })
    .catch((err) => {
      container.textContent = "Ошибка. Запрос не выполнен";
      container.className = "topic";
    })
    .finally(() => {
      topicIdInput.value = "";
      topicInput.value = "";
    });
}
//условие ? выражение1 : выражение2
