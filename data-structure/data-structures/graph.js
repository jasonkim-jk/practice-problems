class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // add a key to the adjacencyList with the name of the vertax
    // set its value to be an empty array
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    // loop as long as there aer any other vertices in the adjacency list for that vertex
    // inside the loop, call removeEdge method with the vertex
    this.adjacencyList[vertex].map((adjacentVertex) => this.removeEdge(adjacentVertex, vertex));
    // delete the key in the adjacency list for that vertex
    delete this.adjacencyList[vertex];
  }

  addEdge(vertex1, vertex2) {
    // find in the adjacency list the key of vertex1 and push vertex2 to the list
    this.adjacencyList[vertex1].push(vertex2);

    // find in the adjacency list the key of vertex2 and push vertex1 to the list
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    // reassign the key of vertex1 to be an array that does not contain vertex2
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((adjacentVertex) => adjacentVertex !== vertex2);
    // reassign the key of vertex2 to be an array that does not contain vertex1
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((adjacentVertex) => adjacentVertex !== vertex1);
  }

  depthFirstRecursive(vertex) {
    // declare a result list to save
    const result = [];
    // mark vertex as visited
    const visited = {};
    const adjacencyLists = this.adjacencyList;

    // create a helper function which accepts a vertex
    function dfs(startingVertex) {
      // check if the vertex is empty
      if (!startingVertex) return null;
      // place the vertex it accepts into the visited object and push that vertex into the result array
      result.push(startingVertex);
      visited[startingVertex] = true;

      // loop over all of the values in the adjacencyList for that vertex
      adjacencyLists[startingVertex].forEach((adjacentVertex) => {
        // if any of those values have not been visited, invoke the helper function again
        if (!visited[adjacentVertex]) {
          return dfs(adjacentVertex);
        }
      });
    }

    // invoke the helper function
    dfs(vertex);
    // return the result list
    return result;
  }

  print() {
    // return the adjacencyList
    return this.adjacencyList;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.print());
console.log(graph.depthFirstRecursive("A"));
