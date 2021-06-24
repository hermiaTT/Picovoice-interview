class book:
    def _init_(self, isbn,title,author,language):
        self.isbn = isbn
        self.title= title
        self.author = author
        self.language = language

list = []
n = 32

def is_book_stored(func):
    def wrapper(*args,**kwargs):
        # Before actually running this func, 
        # take ISBN and find if we have the data stored in local db
        isbn = args[0]
        #search from the list, if isbn is stored in list
        #then return all values needed
        for i in list:
            if i.isbn == isbn:
                return [i.title, i.author, i.language]
        #if did not find the value, execute this function
        val=  func(*args,**kwargs)
        new_book = book(isbn, val.title, val.author, val.language)
        # After find the value of this isbn
        if len(list) >= n:
            list.pop(0)
            list.append(new_book)
        # store it in local db if it is new
        else:
            list.append(new_book)
    return wrapper

@is_book_stored
def f(isbn):
    title = "Iron man"
    author = "hermia"
    language= "japanese"
    book_found = book(isbn,title,author,language)
    return book_found
f(1234)
