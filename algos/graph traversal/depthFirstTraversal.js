const testGraph = require('./testGraph.js');

// use recursion to traverse down the fist edge of each vertex, 
// perform callback as needed at each vertex
// like printing data (ie graph of instructions)

const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
    callback(start);

    // use recursion to traverse the first edge of every vertex as long as the 
    // vertex has not already been visted
    start.edges.forEach((edge) => {
        // assign neighbor to the end of the current vertex's edge
        const neighbor = edge.end;
        // check if neighbor is in vertex array
        if (!visitedVertices.includes(neighbor)) { 
            // add neighbor to array
            visitedVertices.push(neighbor); 
            // recursive call to traverse neighbor's edge
            depthFirstTraversal(neighbor, callback, visitedVertices ); 
        }
    });
};

depthFirstTraversal(testGraph.vertices[0], vertex => console.log(vertex.data));