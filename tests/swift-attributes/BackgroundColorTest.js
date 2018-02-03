import test from 'ava';
import BackgroundColor from '../../src/swift-attributes/BackgroundColor';

test("BackgroundColor", t => {
  let item = {"background": "#ffffff"};
  let backgroundColor = new BackgroundColor(item).parse()

  t.deepEqual(
    ".backgroundColor: UIColor(red: 255/255, green: 255/255, blue: 255/255, alpha: 1.0)",
    backgroundColor
  );
});