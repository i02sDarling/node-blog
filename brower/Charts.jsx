
const React = require('react');

module.exports = class Charts extends React.Component {
    render() {
        const msg = this.props.msg;
        //{msg1,web viewers,admin viewers,sommsg}
        //{msg1,msg2,msg3,msg4}
        return (
            <div className="row">
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-primary o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fa fa-fw fa-comments"></i>
                            </div>
                            <div className="mr-5">{msg.msg1}</div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href="#">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-warning o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fa fa-fw fa-list"></i>
                            </div>
                            <div className="mr-5">{msg.msg2}</div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href="#">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-success o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fa fa-fw fa-shopping-cart"></i>
                            </div>
                            <div className="mr-5">{msg.msg2}</div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href="#">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-danger o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fa fa-fw fa-support"></i>
                            </div>
                            <div className="mr-5">{msg.msg4}</div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href="#">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

