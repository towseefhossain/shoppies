import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Nominations from './components/Nominations';

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders search bar", () => {
  shallow(<SearchBar />)
})

it("renders search results", () => {
  shallow(<SearchResults />)
})

it("renders search bar", () => {
  shallow(<Nominations />)
})

it("App renders children components", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.containsMatchingElement(<SearchBar />)).toEqual(true)
  expect(wrapper.containsMatchingElement(<SearchResults />)).toEqual(true)
  expect(wrapper.containsMatchingElement(<Nominations />)).toEqual(true)
});