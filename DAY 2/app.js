const keepTrack = [];

function createTile(num) {
  const div = document.createElement("div");
  div.classList.add("tile");
  div.id = num;
  return div;
}

// created the black tiles here
function createRow() {
  const row = document.createElement("div");
  row.classList.add("row");
  return row;
}

function insertContainer(element) {
  const container = document.createElement("div");
  const tiles = [0, 1, 2, 3, 4, 5, 6];
  container.classList.add("container");

  for (let i = 0; i < 3; ++i) {
    const row = createRow();
    let count = 0;
    let max = i == 1 ? 1 : 3;

    while (count !== max) {
      const tile = createTile(tiles.pop());
      row.append(tile);
      ++count;
    }
    container.append(row);
  }

  container.onclick = (e) => {
    if (e.target.classList.contains("tile")) {
      e.target.classList.add("green");
      keepTrack.push(e.target.id);
    }

    if (keepTrack.length >= 7) {
      keepTrack.reverse();
      for (let i = 0; i < keepTrack.length; ++i) {
        let id = keepTrack[i];
        let tile = document.getElementById(`${id}`);
        setTimeout(() => {
          tile.classList.remove("green");
        }, (i + 1) * 500);
      }
      keepTrack.length = 0;
    }
  };
  element.append(container);
}
const app = document.getElementById("App");
insertContainer(app);
