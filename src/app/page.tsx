export default function Home() {
    return (
        <div>
            <a href="/api/get-session">Get a session</a>
            <a href="/test?test=params">Test page with client suspense (Works as expected)</a>
            <a href="/test-suspense">Test Page With Dynamic Suspense component (Does not work as expected)</a>
        </div>
    );
}
