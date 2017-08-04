'use strict';

const Editor = require('../editor');
const { expect } = require('chai');

describe('Editor', () => {
  it('allows users to write text', () => {
    const editor = new Editor();

    editor.write('Hello - codez');
    expect(editor.toString()).to.equal('Hello - codez');

    editor.write(' moar');
    expect(editor.toString()).to.equal('Hello - codez moar');
  });

  it('allows users to undo writes', () => {
    const editor = new Editor();

    editor.write('Hello - codez');
    expect(editor.toString()).to.equal('Hello - codez');

    editor.write('Moar stuff');
    expect(editor.toString()).to.equal('Hello - codezMoar stuff');

    editor.write('Even more');
    expect(editor.toString()).to.equal('Hello - codezMoar stuffEven more');

    editor.undo();
    expect(editor.toString()).to.equal('Hello - codezMoar stuff');

    editor.undo();
    expect(editor.toString()).to.equal('Hello - codez');

    editor.undo();
    expect(editor.toString()).to.equal('');
  });

  it('allows users to find and replace', () => {
    const editor = new Editor();

    editor.write('foo stuff');
    editor.write(' other foo');
    editor.replace('foo', 'bar');
    expect(editor.toString()).to.equal('bar stuff other bar');
  });

  xit('allows undo replaces', () => {
    const editor = new Editor();

    editor.write('foo stuff');
    editor.write(' other foo');
    editor.replace('foo', 'bar');
    expect(editor.toString()).to.equal('bar stuff other bar');

    editor.undo();
    expect(editor.toString()).to.equal('foo stuff other foo');

    editor.undo();
    expect(editor.toString()).to.equal('foo stuff');
  });

  xit('allows users to redo', () => {
    const editor = new Editor();

    editor.write('foo stuff');
    editor.write(' other foo');
    editor.replace('foo', 'bar');
    expect(editor.toString()).to.equal('bar stuff other bar');

    editor.undo();
    expect(editor.toString()).to.equal('foo stuff other foo');

    editor.undo();
    expect(editor.toString()).to.equal('foo stuff');

    editor.redo();
    expect(editor.toString()).to.equal('foo stuff other foo');

    editor.redo();
    expect(editor.toString()).to.equal('bar stuff other bar');
  });
});
