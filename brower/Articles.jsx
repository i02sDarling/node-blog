const React = require('react');

module.exports = class ArticleItem extends React.Component {
    render() {
        const Articles = this.props.articles
        return (
            <div className="card mb-3">
                <div className="card-header">
                    <i className="fa fa-table"></i> 所有文章
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>标题</th>
                                    <th>描述</th>
                                    <th>日期</th>
                                    <th>内容</th>

                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>标题</th>
                                    <th>描述</th>
                                    <th>日期</th>
                                    <th>内容</th>

                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    Articles.map((article, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{article.title}</td>
                                                <td>{article.description}</td>
                                                <td>{article.date}</td>
                                                <td>{article.content}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}



