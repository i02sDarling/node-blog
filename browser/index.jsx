const React = require('react');
const ReactDOM = require('react-dom/client');

const Articles = require('../component/Articles.jsx');
const Charts = require('../component/Charts.jsx');
const Settings = require('../component/SettingsP.jsx');


class App extends React.Component {
    state = {
        type: this.props.Type,
        msg: Reactmsg,
        articles: ReactArticles,
        name: 'Privacy'
    }
    componentDidMount() {
        const noDefaultLinks = document.querySelectorAll('.no-default-action');

        // 为每个链接添加点击事件监听器
        noDefaultLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // 阻止默认跳转行为
                // 添加您想要执行的其他操作，比如显示特定内容、执行特定函数等
                console.log('Clicked on link with class no-default-action');
            });
        });
        console.log(this.state.type, this.state.msg, this.state.articles)
        document.getElementById('btn-bashboard').addEventListener('click', () => { this.setState({ type: "Charts" }) })
        document.getElementById('btn-charts').addEventListener('click', () => { this.setState({ type: "Charts" }) })
        document.getElementById('btn-articles').addEventListener('click', () => { this.setState({ type: 'Articles' }) })
        document.getElementById('btn-privacy').addEventListener('click', () => { this.setState({ type: 'Settings' }); console.log('privacy clicked') })


    }

    render() {
        let componentToRender = null;

        // 根据传入的Type选择要渲染的组件
        if (this.state.type === 'Settings') {
            componentToRender = <Settings name={this.state.name} />;
        } if (this.state.type === 'Articles') {
            componentToRender = <Articles articles={this.state.articles} />;
        } else {
            componentToRender = <Charts msg={this.state.msg} />;
        }

        return (
            componentToRender
        )
    }
}

// 渲染App组件到根节点



const root = ReactDOM.createRoot(document.getElementById('root_app_admin'));
root.render(<App Type="Charts" />);

