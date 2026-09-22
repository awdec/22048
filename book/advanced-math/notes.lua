function Div(el)
  if el.classes:includes('book-note') then
    return pandoc.BlockQuote(el.content)
  end
end

function Math(el)
  -- TeX treats adjacent Chinese letters as part of a control word; KaTeX does not.
  -- A delimiter changes tokenization only, not the mathematical expression.
  el.text = el.text:gsub('(\\%a+)([\194-\244])', '%1 %2')
  return el
end
