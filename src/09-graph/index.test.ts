import { describe, it, expect } from '@jest/globals';
import Graph from '.';

describe('Graph', () => {
	const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
	const routes = [
		['PHX', 'LAX'],
		['PHX', 'JFK'],
		['JFK', 'OKC'],
		['JFK', 'HEL'],
		['JFK', 'LOS'],
		['MEX', 'LAX'],
		['MEX', 'BKK'],
		['MEX', 'LIM'],
		['MEX', 'EZE'],
		['LIM', 'BKK'],
	];

	it('should create graph', () => {
		const graph = new Graph();

		airports.forEach((airport) => graph.addNode(airport));
		routes.forEach((route) => {
			const [origin, destination] = route;
			graph.addEdge(origin, destination);
		});

		expect(graph.length).toBe(11);
	});

	it('bfs', () => {
		const graph = new Graph();

		airports.forEach((airport) => graph.addNode(airport));
		routes.forEach((route) => {
			const [origin, destination] = route;
			graph.addEdge(origin, destination);
		});

		expect(graph.bfs('PHX', 'BKK')).toEqual(['MEX', 'LIM']);
	});

	it('dfs', () => {
		const graph = new Graph();

		airports.forEach((airport) => graph.addNode(airport));
		routes.forEach((route) => {
			const [origin, destination] = route;
			graph.addEdge(origin, destination);
		});

		expect(graph.dfs('PHX', 'BKK')).toEqual(['MEX', 'LIM']);
	});
});
