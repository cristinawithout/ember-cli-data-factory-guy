ember-cli-data-factory-guy
===========

## About

ember-cli-data-factory-guy is a wrapper around ember-data-factory-guy for 
ember-cli.

## Install

To install, run:

- `npm install --save-dev ember-cli-data-factory-guy`
- `ember g ember-cli-data-factory-guy` to install ember-data-factory-guy as a bower package and add its predefined variables to tests/.jshintrc

## Usage

In your test files, use `import FactoryGuy from 'factory-guy'` to get the main `FactoryGuy` object. You'll need that object in order to create factories by calling `FactoryGuy.define`.

Use `import testMixin from 'factory-guy'` to get the test mixin, which you can use instead of `FactoryGuyTestMixin` when following the [FactoryGuyTestMixin usage instructions](https://github.com/danielspaniel/ember-data-factory-guy#using-factoryguytestmixin).