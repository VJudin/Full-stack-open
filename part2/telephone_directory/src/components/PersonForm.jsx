const PersonForm = ({onSub, name, onChangeName, number, onChangeNumber}) => (
    <form onSubmit={onSub}>
        <div>
          name: 
            <input
              value={name}
              onChange={onChangeName}
            />
        </div>
        <div>
          number:
            <input
              value={number}
              onChange={onChangeNumber}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
)

export default PersonForm