# Todo App — LocalStorage Roadmap

1. Select input //done

2. Select Add button //done

3. Select task list //done

4. Add click listener to Add button //done

5. Get input.value //done

6. Create `<li>` //done

7. Put task text inside `<li>` //done

8. Create Delete button //done

9. Put Delete button inside `<li>`

10. Put `<li>` inside `<ul>` //done

11. Clear input  //done

12. Add click listener to Delete button //done

13. Remove `<li>` //done

14. Add click listener to task text  //done

15. Toggle `"completed"` //done

# PART 2 — LocalStorage

16. Create a `tasks` array to store all tasks // done

17. Create a task object containing:  //done

    * task text
    * completed status

18. Push the new task object into the `tasks` array  

19. Convert the `tasks` array into a JSON string using `JSON.stringify()`  //

20. Save the JSON string into LocalStorage using `localStorage.setItem()` 

21. Open DevTools → Application → Local Storage and verify that the tasks are actually saved

22. Retrieve the saved tasks using `localStorage.getItem()`

23. Convert the retrieved JSON string back into an array using `JSON.parse()`

24. Check whether saved tasks exist when the page loads

25. If saved tasks exist, recreate each task in the DOM

26. Make sure completed tasks appear as completed after refreshing the page

27. Make sure deleted tasks are also removed from LocalStorage

28. When checkbox changes, update the corresponding task object's `completed` value

29. Save the updated `tasks` array back into LocalStorage

30. Test:

    * Add task
    * Refresh page
    * Close tab
    * Reopen website
    * Check task
    * Refresh
    * Delete task
    * Refresh again

31. Add a `"Clear All Tasks"` button

32. Add functionality to remove all tasks from the DOM

33. Remove all tasks from LocalStorage using `localStorage.clear()` or by removing the specific `"tasks"` item

34. Final test: close browser → reopen website → verify persistence
