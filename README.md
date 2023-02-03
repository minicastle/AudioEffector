- - -
# 정성민의 Original Project - Audio Effector
## 1. Original Project 개발 이유
---
> 기존의 Audio Effector는 외부의 하드웨어를 통한 구현 혹은 plugin을 적용할 수 있는 프로그램을 통해서 구현하는 방법이 일반적입니다. <br>
물론 이 방법은 모두 좋은 방법입니다. <br>
하드웨어를 이용하기 때문에 반응속도도 빠르고 plugin을 추가해 확장성을 높일수도 있습니다. <br> 미리 제작된 프로그램 또한 반응속도가 뛰어나고 plugin이 다양하기 때문에 제가 개발한 프로그램으로는 대체가 불가능한 점입니다. <br>
하지만 하드웨어를 이용한 방법은 적어도 30만원 이상의 초기 비용이 필요하고 프로그램과 plugin을 이용하면 10만원 중반정도의 초기 비용이 필요하게 됩니다.<br>
이러한 부분을 조금이라도 대체할수 없을까? 하는 생각에 가장대표적으로 사용하는 2가지 기능인 에코와 잡음제거 기능을 가진 Desctop App을 개발하게 되었습니다.

---
## 2. 개발과정
---
>## 1. CRA(Create React App)을 이용하여 React 환경구축
> -  간단한 Clone Coding 프로젝트 이기 때문에 CRA를 통해 개발환경을 구축하였습니다.
>> CRA는 사용하지 않는 기능들도 들어가기 때문에 최적화에는 용이하지 않은 방법이지만 간단한 Clone 프로젝트 이기 때문에 개발환경을 자동으로 설정해주는 CRA를 사용하였습니다.
>## 2. ElctronJS를 이용한 Desctop App 환경구축
> - ElectronJS는 기존의 web site를 개발하는 방법과 동일하게 개발한후 이를 Desctop App으로 변환해주는 라이브러리 입니다. 
>## 3. Redux를 이용한 현재상태 저장
> - web site에서 사용하는 Local Storage 혹은 Cookie를 사용할수도 있지만 조금 더 효율을 높이기 위해 Redux를 이용하여 현재상태를 저장하는 Store를 구성하였습니다.
>## 4. 
---
## 3. 개발이후 생각한 사이트 개선점 & 배운점
---
## 개선점
> 1. Footer의 subinfo
> - subinfo는 해당 아이템을 클릭하여 열수 있지만 닫는것 또한 해당 아이템을 클릭 또는 
## 배운점
> 1. grid와 sticky를 이용한 게시판 형태
> - 게시판은 데이터를 기반으로 정적인 페이지를 생성하기 때문에 사이트마다 의외성을 주기 힘들지만 그리드를 이용하여 반응형으로 만들수 있고 sticky를 이용하여 animation이 아닌 부드러운 움직임을 만들어 리소스를 줄이고 자연스러운 형태를 만들수 있다는 것을 배웠다.


---
### ◤ 정성민의 다른 프로젝트 ◢
| Project Name              | Source Code           | Original Site             |
| :--                       | :--:                  | :--                       |
|[포트폴리오](https://minicastle.github.io/portpolio/)|||
|[Colco(Clone)](https://minicastle.github.io/Clone-Colco/)|[git](https://github.com/minicastle/Clone-Colco)|[Colco(origin)](https://colco.app/)|
|[Jolly-Flow(Clone)](https://minicastle.github.io/Clone-JollyFlow/)|[git](https://github.com/minicastle/Clone-JollyFlow)|[Jolly-Flow(origin)](https://jollyflow.webflow.io/)|
|[kakao(Clone)](https://minicastle.github.io/Clone-Kakao/)|[git](https://github.com/minicastle/Clone-kakao)|[kakao(origin)](https://www.kakaocorp.com/page/)|

> [정성민의 GitHub](https://github.com/minicastle)

> ### 이메일 링크: <minicastle@kakao.com>
---
## ※개발에 사용된 언어 및 npm package※
---
|Package Name                 	| version  	    |
| :--                         	| :--:     		|
|@mui/icons-material	        |^5.5.1		    |
|@mui/material		            |^5.5.3		    |
|@testing-library/jest-dom	    |^5.16.3		|
|@testing-library/react	        |^12.1.4		|
|@testing-library/user-event	|^13.5.0		|
|pizzicato			            |^0.6.4		    |
|react			                |^17.0.2		|
|react-dom		                |^17.0.2		|
|react-redux		            |^7.2.6		    |
|react-scripts		            |5.0.0		    |
|redux			                |^4.1.2		    |
|redux-persist		            |^6.0.0		    |
|web-vitals		                |^2.1.4		    |
|electron			            |^18.0.3		|
|electron-builder		        |^23.0.3		|
|wait-on			            |^7.0.1		    |
---