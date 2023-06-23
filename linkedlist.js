function Node(value = null, link = null) {
  let node = Object.create({});
  node.value = value;
  node.link = link;
  return node;
}

function LinkedList() {
  let linked_list = Object.create({});
  let _size = 0;
  let _head = null;
  let _tail = null;

  const append = (value) => {
    // works
    let node = Node(value);

    if (linked_list._head === null) {
      linked_list._head = node;
      linked_list._tail = node;
      linked_list._size = 1;
      return;
    }
    linked_list._tail.link = node;
    linked_list._tail = node;
    linked_list._size++;
  };
  const prepend = (value) => {
    if (linked_list._head === null) {
      linked_list._head = node;
      linked_list._tail = node;
      linked_list._size = 1;
      return;
    }
    let node = Node(value);
    node.link = linked_list._head;
    linked_list._head = node;
    linked_list._size++;
  };

  const size = () => linked_list._size;

  const head = () => linked_list._head;

  const tail = () => linked_list._tail;

  const at = (index) => {
    // works
    let node = linked_list._head;
    for (let i = 0; i < index; i++) {
      node = node.link;
    }
    return node;
  };

  const pop = () => {
    // works
    let node = linked_list._head;
    while (true) {
      if (node.link != linked_list._tail) {
        node = node.link;
      } else {
        node.link = null;
        linked_list._tail = node;
        linked_list._size--;
        return;
      }
    }
  };
  const contains = (value) => {
    // works
    let node = linked_list._head;
    while (node !== null) {
      if (node.value === value) return true;
      node = node.link;
    }
    return false;
  };

  const find = (value) => {
    // works
    let node;
    for (let i = 0; i < linked_list._size; i++) {
      if (i == 0) {
        node = linked_list._head;
        if (node.value === value) return 0;
      }
      if (node.value === value) {
        console.log(node);
        return i;
      }
      node = node.link;
    }
    return null;
  };

  const toString = () => {
    // works
    string = "";
    let node = linked_list._head;

    while (node !== null) {
      console.log(node);
      string += `( ${node.value} ) -> `;
      node = node.link;
    }
    string += "null";

    return string;
  };

  return Object.assign(linked_list, {
    _size,
    _head,
    _tail,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  });
}
