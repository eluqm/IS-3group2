export default function Caption(props) {
  const {title, descrip} = props;
  return (
    <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
      {title}
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"> {descrip} </p>
    </caption>
  );
}