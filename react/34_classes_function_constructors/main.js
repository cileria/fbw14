class ReactComponent {
    constructor() {
        
    }

    shouldComponentRender() {

    }

    render() {

    }

    setState() {

    }
}

// stateful -> erbt von ReactComponent
function App() {
    
    ReactComponent.constructor.call(this)
}

App.prototype.render = function() {

}

const app = new App();

// stateless -> weil er nicht von ReactComponent erbt
function Header() {
    return '<div>Header</div>';
}