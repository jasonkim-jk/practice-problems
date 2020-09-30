class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // add a key to the adjacencyList with the name of the vertax
    // set its value to be an empty array
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    // find in the adjacency list the key of vertex1 and push vertex2 to the list
    this.adjacencyList[vertex1].push(vertex2);

    // find in the adjacency list the key of vertex2 and push vertex1 to the list
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    // reassign the key of vertex1 to be an array that does not contain vertex2
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((element) => element !== vertex2);
    // reassign the key of vertex2 to be an array that does not contain vertex1
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((element) => element !== vertex1);
  }

  print() {
    // return the adjacencyList
    return this.adjacencyList;
  }
}

const graph = new Graph();
graph.addVertex("Los Angeles");
graph.addVertex("Las Vegas");
graph.addVertex("San Jose");
graph.addEdge("Las Vegas", "Los Angeles");
graph.addEdge("Los Angeles", "San Jose");
console.log(graph.print());
graph.removeEdge("Los Angeles", "San Jose");
console.log(graph.print());
