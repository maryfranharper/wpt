
def test_exception_syntax():
    try:
        0/0
    except ZeroDivisionError as e:
        pass

