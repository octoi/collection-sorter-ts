import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([5, 4, 3, 2, 1]);
const characterCollection = new CharacterCollection('54321');
const linkedList = new LinkedList();

linkedList.add(5);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);

numbersCollection.sort();
characterCollection.sort();
linkedList.sort();

console.log(numbersCollection.data);
console.log(characterCollection.data);
linkedList.print();
