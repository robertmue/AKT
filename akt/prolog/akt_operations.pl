attribute_sentence(I,att_value(Obj,Att,Val)):-
    sentence(I,_,formal(att_value(A,Att,Val),[A:Obj]),_,_,attribute).

conditional_attribute_sentence(I,att_value(Obj,Att,Val) if att_value(Obj1,Att1,Val1)):-
    sentence(I,_,formal(att_value(A,Att,Val) if att_value(A1,Var1,Val1),
        [A:Obj,A1:Obj1]),_,_,attribute).
conditional_attribute_sentence(I,att_value(Obj,Att,Val) if att_value(Obj1,Att1,Val1) and att_value(Obj2,Att2,Val2)):-
    sentence(I,_,formal(att_value(A,Att,Val) if att_value(A1,Att1,Val1) and att_value(A2,Att2,Val2),
        [A:Obj,A1:Obj1,A2:Obj2]),_,_,attribute).

causal_sentence(I,att_value(Obj1,Att1,Val1) causes2way att_value(Obj2,Att2,Val2)):-
    sentence(I,_,formal(att_value(A1,Att2,Val2) causes2way att_value(A2,Att2,Val2),[A1:Obj1,A2:Obj2]),_,_,causal).

english_sentence(att_value(Obj,Att,Val),attribute,E):-
    atomic_list_concat(['The',Att,of,Obj,is,Val],' ',E).
english_sentence(att_value(Obj,Att,Val) if att_value(Obj1,Att1,Val1),condtional_attribute,E):-
    atomic_list_concat(['The',Att,of,Obj,is,Val,if,the,Att1,of,Obj1,is,Val1],' ',E).
english_sentence(att_value(Obj,Att,Val) if att_value(Obj1,Att1,Val1) and att_value(Obj2,Att2,Val2),condtional_attribute,E):-
    atomic_list_concat(['The',Att,of,Obj,is,Val,if,the,Att1,of,Obj1,is,Val1,and,the,Att2,of,Obj2,is,Val2],' ',E).

get_sentence(I,attribute,E):-
    attribute_sentence(I,S),
    english_sentence(S,F).
get_sentence(I,conditional_attribute,E):-
    conditional_attribute_sentence(I,S),
    english_sentence(S,F).

count_attribute_sentence(N):-
    bagof(I,A^attribute_sentence(I,A),Is),
    length(Is,N).

count_conditional_attribute_sentence(N):-
    bagof(I,A^conditional_attribute_sentence(I,A),Is),
    length(Is,N).
