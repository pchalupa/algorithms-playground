export default class Graph {
	private adjencyList = new Map<string, string[]>();

	get length() {
		return this.adjencyList.size;
	}

	addNode(airport: string) {
		this.adjencyList.set(airport, []);
	}

	addEdge(origin: string, desctination: string) {
		this.adjencyList.get(origin)?.push(desctination);
		// Undirected
		this.adjencyList.get(desctination)?.push(origin);
	}

	bfs(start: string, needle: string) {
		const queue = [start];
		const visited = new Set<string>();
		const result: string[] = [];

		while (queue.length > 0) {
			const airport = queue.shift();
			if (airport) {
				const destinations = this.adjencyList.get(airport);

				destinations?.forEach((destination) => {
					if (destination === needle) result.push(airport);

					if (!visited.has(destination)) {
						visited.add(destination);
						queue.push(destination);
					}
				});
			}
		}

		return result;
	}

	dfs(airport: string, target: string, visited = new Set<string>(), results: string[] = []) {
		visited.add(airport);

		const destinations = this.adjencyList.get(airport);
		destinations?.forEach((destination) => {
			if (destination === target) {
				results.push(airport);
				return;
			}

			if (!visited.has(destination)) {
				this.dfs(destination, target, visited, results);
			}
		});

		return results;
	}
}
