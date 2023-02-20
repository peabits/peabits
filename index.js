function MyApp() {
    return <div>
        <h1>App</h1>
    </div>
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);