export default function FormLabel(props) {
    const { name } = props;
    return (
        <label class="block text-sm font-medium text-gray-700"> {name} </label>
    );
}