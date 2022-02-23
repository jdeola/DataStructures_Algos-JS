// In this implementation of BFS, we use a queue to determine what vertex 
// to look at next and when there are no vertices left search, ie done traversing the graph. 
// In order to iterate through the queue, we use a while loop. 
// However, we could also use recursion to iterate through the queue.

const testGraph = require('./testGraph.js');
const Queue = require('../../structures/Queue');

const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  const visitQueue = new Queue;
  visitQueue.enqueue(start);

  while(!visitQueue.isEmpty()) {
    const current = visitQueue.dequeue()
      console.log(current.data);

      current.edges.forEach((edge) => {
        
        const neighbor = edge.end;

        if (!visitedVertices.includes(neighbor)) {
          visitQueue.enqueue(neighbor);
          visitedVertices.push(neighbor);
        }
      })
  }
  
};

breadthFirstTraversal(testGraph.vertices[0]);
