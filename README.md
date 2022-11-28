## Vanilla JS Redux로 상태관리 만들기

Redux로 상태관리하기

### store : state. 데이터를 넣을곳을 생성. reducer를 담는다.
- import {createStore} from "redux"; => 최신버전으로 import시 밑줄이 생기지만 사용가능 <br/>
store = createStore(reducer); 

- import { legacy_createStore } from "redux"; => 최신버전시 사용 <br/>
store = legacy_createStore(reducer); 

### reducer 
: state와 action을 담아 상태가 변경되는 데이터를 담는다. <br/>
reducer가 return하는 것은 state가 된다.
- action의 타입별 상태 변화를 만든다. <br/>
- if문 또는 switch 사용


### action 
: reducer와 소통하는 방법.

- {type : "ADD"} : type을 키로 이용하여 키값으로 대문자사용.<br/>
변경될 데이터의 타입을 지정하여 reducer에 지정 타입별 상태변화를 만들수 있다.
- dispatch(action) : reducer에게 action을 보내는 방법. type으로 지정된 action을 dispatch에 담아 보내면 타입에 따라 상태가 변경된다.

### store 메서드

- getState()
- dispatch(action)
- subscribe(listener)
- replaceReducer(nextReducer)

### getState()
: 현재 상태 트리를 반환. 스토어의 리듀서가 마지막으로 반환한 값과 동일.

### dispatch(action)
: reducer에 액션을 보내는 방법, 상태의 변경을 일으킨다.

### subscribe(listener)
: 변경사항에 대한 리스너를 담는다.

