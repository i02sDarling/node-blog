const React = require('react');

module.exports = class Settings extends React.Component {
    render() {
        const name = this.props.name;
        console.log(name);
        return (
            <div>
                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fa fa-area-chart"></i> Privacy
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="input-group flex-nowrap">
                                        <button className="input-group-text" id="addon-wrapping">点击修改</button>
                                        <input type="text" className="form-control" placeholder="Username"
                                            aria-describedby="addon-wrapping" />
                                    </div>
                                </div>

                                <div className="row" style={{ marginTop: '20px' }}>
                                    <div className="input-group flex-nowrap">
                                        <button className="input-group-text" id="addon-wrapping">点击修改</button>
                                        <input type="password" className="form-control" placeholder="Password"
                                            aria-label="Password" aria-describedby="addon-wrapping" />
                                    </div>
                                </div>
                                <div className="row"></div>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                    <div className="card-footer small text-muted">Updated yesterday at 02:59 PM</div>
                </div>
            </div>
        )
    }
}







