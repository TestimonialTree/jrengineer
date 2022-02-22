export default function ProblemWrapper ({description, children}) {
    return (
        <div>
            <div>
                Problem: {description}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}