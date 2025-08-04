const Filter = ({val, changefunc}) => (
    <div>
        filter shown with
            <input
                value={val}
                onChange={changefunc}
            />
    </div>
)

export default Filter