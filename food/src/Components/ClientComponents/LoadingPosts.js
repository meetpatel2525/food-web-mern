export const LoadingCard = () => {
  return (
    <div class="w-full rounded overflow-hidden shadow-lg m-2">
      <div class="w-full h-64 bg-gray-300 animate-pulse"></div>
      <div class="px-6 py-4 items-center">
        <div class="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  );
};

export const LoadingPosts = () => {
  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};
