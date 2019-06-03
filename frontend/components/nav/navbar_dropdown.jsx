class NavbarDropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
        };
        this.yesmenu = this.yesmenu.bind(this);
        this.nomenu = this.nomenu.bind(this);
    }

    yesmenu(e) {
        e.preventDefault();

        this.setState({
            yesmenu: true,
        }, () => {
            document.addEventListener('click', this.nomenu);
        });
    }

    nomenu() {
        this.setState({ yesmenu: false }, () => {
            document.removeEventListener('click', this.nomenu);
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.yesmenu}>
                    Yes Menu
            </div>
                this.state.yesmenu
                ? (
                    <div>
                    <div>
                        <ul>
                            <li>Test Group 1</li>
                            <li>Test Group 2</li>
                            <li>Test Group 3</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Profile</li>
                            <li>Settings</li>
                            <li>Log Out</li>
                        </ul>
                    </div>
                </div>
                )
                : (
                    null
                )
            </div>


        )
    }



}
export default NavbarDropdown