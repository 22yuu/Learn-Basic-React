import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = ({name, favoriteNumber, children}) => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. <br/>
//             children 값은 {children}입니다.
//             <br/>
//             제가 좋아하는 숫자는 {favoriteNumber}입니다.
//         </div>
//     );
// };

// 클래스형 컴포넌트에서 props 사용하기
class MyComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props; // 비구조화 할당
        return (
            <div>
                안녕하세요, 제 이름은 { name }입니다. <br/>
                children 값은 { children }입니다. <br />
                제가 좋아하는 숫자는 { favoriteNumber }입니다.
            </div>
        )
    }
}

MyComponent.defaultProps = {
    name : '기본이름'
}

MyComponent.propTypes = {
    name: PropTypes.string, // name 값은 무조건 string 형태로 전달해야 된다는 것을 의미
    favoriteNumber: PropTypes.number.isRequired
}


// 클래스형 컴포넌트에서 defaultProps와 propTypes를 설정할 때 class 내부에서 지정하는 방법도 있음(아래와 같음)
// class MyComponent extends Component {
//     static defaultProps = {
//         name : '기본 이름'
//     };
//     static propTypes = {
//         name : PropTypes.string,
//         favoriteNumber: PropTypes.number.isRequired
//     };
//     render() {
//         const { name, favoriteNumber, children } = this.props;
//         return (
//             <div>
//                 안녕하세요, 제이름은 { name }입니다. <br/>
//                 children 값은 { children }입니다. <br/>
//                 제가 좋아하는 숫자는 { favoriteNumber }입니다.
//             </div>
//         )
//     }
// }



export default MyComponent;