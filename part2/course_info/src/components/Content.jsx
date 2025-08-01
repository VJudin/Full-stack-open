import Part from "./Part"
import Total from "./Total"

const Content = ({content}) => (
    <div>
        {content.map(part =>
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
        <Total parts={content} />
    </div>
)

export default Content