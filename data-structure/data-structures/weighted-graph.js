class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // add a key to the adjacencyList with the name of the vertax
    // set its value to be an empty array
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    // find in the adjacency list the key of vertex1 and push vertex2 to the list
    this.adjacencyList[vertex1].push({ node: vertex2, weight });

    // find in the adjacency list the key of vertex2 and push vertex1 to the list
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  print() {
    // return the adjacencyList
    return this.adjacencyList;
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.print());
